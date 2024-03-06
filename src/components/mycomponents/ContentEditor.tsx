import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface Props {
  contentValue: string
  setContentValue: (value: string) => void
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'blockquote',
  'list',
  'bullet',
  'indent'
]

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link']
  ],
  clipboard: {
    matchVisual: false
  }
}

const ContentEditor = ({
  contentValue,
  setContentValue
}: Props): JSX.Element => {
  return (
    <div className='w-full h-full'>
      <ReactQuill
        placeholder='Escribe algo...'
        theme='snow'
        className='h-full w-full text-foreground'
        value={contentValue}
        onChange={setContentValue}
        formats={formats}
        modules={modules}
      />
    </div>
  )
}

export default ContentEditor
