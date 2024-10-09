import SignInPage from './api/auth/signin/page'
import Header from './components/header/header'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Header />
      <h1 className="text-4xl font-bold">This is the homepage</h1>
      <div>
        <SignInPage />
      </div>
    </div>
  );
}
