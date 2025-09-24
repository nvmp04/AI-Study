import { useState } from 'react';
import { Brain, Eye, EyeOff, Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';
import {check} from '../../utils/checkEmailPass'
import { useAuth } from '../../hooks/useAuth'; 
import { sendInformation } from '../../services/LogSign';
import { emailRef, passwordRef } from '../../utils/checkEmailPass';
import Popup from "./PopupComp";
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
  const navigate  = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);
  const {setIsLoggedIn} = useAuth();
  const [popupCont, setPopupCont] = useState(null);
  async function LogSign() {
    const inputEmail = emailRef.current.value;
    const inputPassword = passwordRef.current.value;
    const type = isLogIn ? 'login' : 'signup';
    const hasError = check();
    if (!hasError) {
      const information = { email: inputEmail, password: inputPassword };
      const res = await sendInformation(information, type);
      if (res.success) {
        if(isLogIn){
          localStorage.setItem("isLoggedIn", "true");
          navigate('/');
          setIsLoggedIn(true);
        }
        else{
          setIsLogIn(true);
          setPopupCont("Successful registration");
        }
      }
      else{
        setPopupCont(res.information);
      }
    }
    return;
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              StudyAI Pro
            </h1>
            <div className="flex items-center space-x-1">
              <Sparkles className="h-3 w-3 text-yellow-400" />
              <span className="text-xs text-yellow-400 font-medium">PREMIUM</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">
              {isLogIn ? 'Join StudyAI Pro' : 'Welcome Back'}
            </h2>
            <p className="text-gray-400">
              {isLogIn ? 'Start your premium experience' : 'Continue your learning journey'}
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  ref={emailRef}
                  type="email"
                  className="w-full bg-black/40 border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  ref = {passwordRef}
                  type={showPassword ? 'text' : 'password'}
                  className="w-full bg-black/40 border border-white/20 rounded-2xl pl-12 pr-12 py-4 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {isLogIn && (
              <div className="flex justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="w-4 h-4 rounded mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-blue-400 hover:text-blue-300">Forgot password?</a>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={()=>LogSign()} 
              className="group w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25">
              <div className="flex items-center justify-center space-x-3">
                <span>{!isLogIn ? 'Create Account' : 'Log In'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Social Login */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-black/50 text-gray-400 text-sm">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-white/5 border border-white/20 hover:border-white/40 rounded-2xl py-3 transition-all">
                <div className="w-5 h-5 bg-white rounded"></div>
                <span className="text-white font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white/5 border border-white/20 hover:border-white/40 rounded-2xl py-3 transition-all">
                <div className="w-5 h-5 bg-white rounded"></div>
                <span className="text-white font-medium">Apple</span>
              </button>
            </div>

            {/* Toggle */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                {!isLogIn ? "Already have an account?" : "Don't have an account?"}
                <button
                  onClick={() => {
                    emailRef.current.value = ''
                    passwordRef.current.value = ''
                    emailRef.current.placeholder = 'Email address'
                    passwordRef.current.placeholder = 'Password'
                    setIsLogIn(!isLogIn)
                  }}
                  className="ml-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  {!isLogIn ? 'Log In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Popup popupCont={popupCont} setPopupCont={setPopupCont}/>
    </div>
  );
}