import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: Array, required: true },
  sources: { type: Array, required: true },
  imageURL: { type: String, required: true },
  author: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Post || mongoose.model('Post', PostSchema)
