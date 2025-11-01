import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true, index: true },
  campusId: { type: Number, required: true, index: true },
  email: String,
  login: { type: String, required: true, unique: true, index: true },
  first_name: String,
  last_name: String,
  usual_full_name: String,
  usual_first_name: String,
  url: String,
  phone: String,
  displayname: String,
  kind: String,
  image: {
    link: String,
    versions: {
      large: String,
      medium: String,
      small: String,
      micro: String
    }
  },
  "staff?": Boolean,
  correction_point: Number,
  pool_month: String,
  pool_year: String,
  location: String,
  wallet: Number,
  anonymize_date: String,
  data_erasure_date: String,
  created_at: Date,
  updated_at: Date,
  alumnized_at: Date,
  "alumni?": Boolean,
  "active?": Boolean,
  blackholed: { type: Boolean, default: null },
  next_milestone: { type: String, default: null },
  is_piscine: { type: Boolean, default: false },
  is_trans: { type: Boolean, default: false }
}, { timestamps: true });

const cheaterSchema = new mongoose.Schema({
  campusId: { type: Number, required: true, index: true },
  login: { type: String, required: true, index: true },
  project: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: String, required: true }
}, { timestamps: true });

cheaterSchema.index({ login: 1, project: 1, date: 1 }, { unique: true });

export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
export const Cheater = mongoose.models.Cheater || mongoose.model("Cheater", cheaterSchema);
