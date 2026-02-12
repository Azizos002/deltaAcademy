import React from 'react';

export function FormField({ id, label, icon: Icon, required = false, children, theme, language }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className={`block ${theme.text} font-semibold mb-2 flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
        {Icon ? <Icon size={18} /> : null}
        <span>{label}{required ? ' *' : ''}</span>
      </label>
      {children}
    </div>
  );
}

export function fieldClass(theme) {
  return `w-full px-4 py-3 md:py-3.5 text-base ${theme.card} border-2 ${theme.border} rounded-xl focus:ring-2 focus:ring-[#ec960b] outline-none transition-all ${theme.text}`;
}
