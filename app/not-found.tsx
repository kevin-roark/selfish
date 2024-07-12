import { link } from './util/links'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 72px)' }}>
      <h1 className="text-6xl font-bold tracking-wide">
        This Page Does Not Exist :)
        <br />
        Go {link('/', 'Home')}.
      </h1>
    </div>
  )
}
