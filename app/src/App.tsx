/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**
 * * Route/Component imports
 */
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import TeamsPage from './pages/Teams'
import ProfilePage from './pages/Profile'

import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'

import EmailConfirmationPage from './pages/EmailConfirmation'

import TermsConditionsPage from './pages/TermsConditions'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import ContactsPage from './pages/Contacts'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route
            path="/email-confirmation"
            element={<EmailConfirmationPage />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
