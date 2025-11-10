import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

interface Project {
  project: string;
  score: number;
  date: string;
}

interface Student {
  login: string;
  displayname: string;
  image: {
    link: string;
  };
  correction_point: number;
  wallet: number;
  grade: string | null;
}

interface TopSubmitter {
  login: string;
  projectCount: number;
  totalScore: number;
  projects: Project[];
  student: Student | null;
}

interface TopLocation {
  login: string;
  totalDuration: string;
  student: Student | null;
}

interface DashboardData {
  currentMonth: string;
  topProjectSubmitters: TopSubmitter[];
  topLocationStats: TopLocation[];
}

function Dashboard() {
  const { user, logout, token } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (duration: string) => {
    // duration format: "HH:MM:SS"
    const [hours, minutes] = duration.split(':');
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1><a href="/" className="header-link">42 Watcher</a></h1>
          <nav className="nav-links">
            <a href="/" className="nav-link active">Dashboard</a>
            <a href="/students" className="nav-link">Students</a>
          </nav>
          {user && (
            <div className="user-info">
              <img src={user.image.link} alt={user.login} />
              <span>{user.login}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-content">
        {loading ? (
          <div className="loading">Loading dashboard...</div>
        ) : data ? (
          <>
            <h2 className="month-title">📊 {data.currentMonth} Statistics</h2>
            
            <div className="stats-grid">
              {/* Top Project Submitters */}
              <section className="stats-section">
                <h3 className="section-title">🏆 Top Project Submitters</h3>
                <div className="top-list">
                  {data.topProjectSubmitters.map((submitter, index) => (
                    <div 
                      key={submitter.login} 
                      className={`top-card rank-${index + 1}`}
                      onClick={() => navigate(`/students?search=${submitter.login}`)}
                    >
                      <div className="rank-badge">{index + 1}</div>
                      {submitter.student && (
                        <img 
                          src={submitter.student.image.link} 
                          alt={submitter.student.login}
                          className="student-avatar"
                        />
                      )}
                      <div className="student-details">
                        <h4>{submitter.student?.displayname || submitter.login}</h4>
                        <div className="student-stats">
                          <span className="stat-item">
                            📦 {submitter.projectCount} projects
                          </span>
                          <span className="stat-item">
                            ⭐ {submitter.totalScore} total score
                          </span>
                        </div>
                        {submitter.student && (
                          <div className="student-extras">
                            {submitter.student.grade && (
                              <span className="grade-badge">{submitter.student.grade}</span>
                            )}
                            <span className="points">🎯 {submitter.student.correction_point} pts</span>
                            <span className="wallet">💰 {submitter.student.wallet} ₳</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Top Location Stats */}
              <section className="stats-section">
                <h3 className="section-title">⏱️ Top Campus Time</h3>
                <div className="top-list">
                  {data.topLocationStats.map((location, index) => (
                    <div 
                      key={location.login} 
                      className={`top-card rank-${index + 1}`}
                      onClick={() => navigate(`/students?search=${location.login}`)}
                    >
                      <div className="rank-badge">{index + 1}</div>
                      {location.student && (
                        <img 
                          src={location.student.image.link} 
                          alt={location.student.login}
                          className="student-avatar"
                        />
                      )}
                      <div className="student-details">
                        <h4>{location.student?.displayname || location.login}</h4>
                        <div className="student-stats">
                          <span className="stat-item time-stat">
                            ⏰ {formatDuration(location.totalDuration)}
                          </span>
                        </div>
                        {location.student && (
                          <div className="student-extras">
                            {location.student.grade && (
                              <span className="grade-badge">{location.student.grade}</span>
                            )}
                            <span className="points">🎯 {location.student.correction_point} pts</span>
                            <span className="wallet">💰 {location.student.wallet} ₳</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        ) : (
          <div className="error">Failed to load dashboard data</div>
        )}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <a href="https://sinek.dev" target="_blank" rel="noopener noreferrer">sinek.dev</a>
          <span>•</span>
          <a href="https://github.com/CilginSinek" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>•</span>
          <a href="https://github.com/CilginSinek/42watcherreact" target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
