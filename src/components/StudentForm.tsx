import React, { useState } from 'react';
import { User, FileText, Key, Hash, GraduationCap } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  specialization: string;
  registrationNumber: string;
  secretNumber: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  specialization?: string;
  registrationNumber?: string;
  secretNumber?: string;
}

interface StudentFormProps {
  onSubmit: (data: FormData) => void;
  loading: boolean;
}

const specializations = [
  'تقني رياضي',
  'علوم تجريبية',
  'رياضيات',
  'آداب وفلسفة',
  'لغات أجنبية',
  'تسيير واقتصاد'
];

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    specialization: '',
    registrationNumber: '',
    secretNumber: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'يرجى إدخال الاسم';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'يرجى إدخال اللقب';
    }
    
    if (!formData.specialization) {
      newErrors.specialization = 'يرجى اختيار الشعبة';
    }
    
    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'يرجى إدخال رقم التسجيل';
    }
    
    if (!formData.secretNumber.trim()) {
      newErrors.secretNumber = 'يرجى إدخال الرقم السري';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
        رجاءً املأ معلوماتك بشكل مناسب
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <User size={20} />
          </div>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="ادخل اسمك هنا"
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl transition-all duration-200 text-right bg-gray-50 focus:bg-white focus:outline-none ${
              errors.firstName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={loading}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.firstName}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FileText size={20} />
          </div>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="ادخل لقبك هنا"
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl transition-all duration-200 text-right bg-gray-50 focus:bg-white focus:outline-none ${
              errors.lastName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={loading}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.lastName}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <GraduationCap size={20} />
          </div>
          <select
            value={formData.specialization}
            onChange={handleChange('specialization')}
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl transition-all duration-200 text-right bg-gray-50 focus:bg-white focus:outline-none appearance-none ${
              errors.specialization ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={loading}
          >
            <option value="">اختر شعبتك</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
          {errors.specialization && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.specialization}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Hash size={20} />
          </div>
          <input
            type="text"
            value={formData.registrationNumber}
            onChange={handleChange('registrationNumber')}
            placeholder="ضع هنا أرقاماً عشوائياً"
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl transition-all duration-200 text-right bg-gray-50 focus:bg-white focus:outline-none ${
              errors.registrationNumber ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={loading}
          />
          {errors.registrationNumber && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.registrationNumber}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Key size={20} />
          </div>
          <input
            type="password"
            value={formData.secretNumber}
            onChange={handleChange('secretNumber')}
            placeholder="ضع هنا أرقاماً عشوائياً"
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl transition-all duration-200 text-right bg-gray-50 focus:bg-white focus:outline-none ${
              errors.secretNumber ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={loading}
          />
          {errors.secretNumber && (
            <p className="text-red-500 text-sm mt-1 text-right">{errors.secretNumber}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              جار التحميل...
            </div>
          ) : (
            'استظهار النتيجة'
          )}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;