import { Lock, Heart } from 'lucide-react';

interface LoginViewProps {
  code: string;
  isWrongCode: boolean;
  handleKeyPress: (digit: string) => void;
  handleLogin: () => void;
  handleClear: () => void;
  CODE_LENGTH: number;
}

const LoginView: React.FC<LoginViewProps> = ({
  code,
  isWrongCode,
  handleKeyPress,
  handleLogin,
  handleClear,
  CODE_LENGTH
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            size={Math.random() * 20 + 10}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-4 shadow-lg">
            <Lock className="text-white" size={32} />
          </div>
          <p className="text-gray-600">Ingresa nuestro código especial</p>
        </div>
        <div className="flex justify-center mb-6">
          <div className="flex space-x-3">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  code.length > index
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 border-pink-400'
                    : 'border-gray-300'
                } ${isWrongCode ? 'animate-shake border-red-400' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, ''].map((digit, index) => (
            <button
              key={index}
              onClick={() => {
                if (digit === '') return;
                if (typeof digit === 'number') {
                  handleKeyPress(digit.toString());
                }
              }}
              disabled={digit === ''}
              className={`h-14 rounded-xl font-semibold text-lg transition-all duration-200 ${
                digit === ''
                  ? 'invisible'
                  : 'bg-white/50 hover:bg-white/70 active:scale-95 shadow-md hover:shadow-lg border border-white/30'
              }`}
            >
              {digit}
            </button>
          ))}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleClear}
            className="flex-1 py-3 bg-gray-200/50 hover:bg-gray-200/70 rounded-xl font-semibold transition-all duration-200 active:scale-95"
          >
            Borrar
          </button>
          <button
            onClick={handleLogin}
            disabled={code.length !== CODE_LENGTH}
            className="flex-1 py-3 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            Entrar
          </button>
        </div>
        {isWrongCode && (
          <p className="text-red-500 text-center mt-4 animate-pulse">
            Código incorrecto, intenta de nuevo
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginView;
