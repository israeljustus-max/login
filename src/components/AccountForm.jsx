import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AccountForm({ register = false }) {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    if (register && String(data.get('name')).trim().split(/\s+/).length < 2) nextErrors.name = 'Informe seu nome completo.';
    const email = form.elements.email;
    if (!email.value.trim() || !email.validity.valid) nextErrors.email = 'Informe um e-mail válido.';
    const password = String(data.get('password') || '');
    if (password.length < 8) nextErrors.password = 'Use uma senha com pelo menos 8 caracteres.';
    if (register && (!data.get('confirmation') || password !== data.get('confirmation'))) nextErrors.confirmation = 'As senhas devem ser iguais.';
    setErrors(nextErrors);
    setMessage('');
    if (Object.keys(nextErrors).length) { form.elements[Object.keys(nextErrors)[0]].focus(); return; }
    form.reset();
    setMessage(register ? 'O cadastro estará disponível após a integração com o backend. Nenhuma conta foi criada e os campos foram limpos.' : 'O acesso estará disponível após a implementação do backend. Nenhuma autenticação foi realizada e os campos foram limpos.');
  }
  function field(name, label, type, autoComplete, placeholder) {
    return <div className="field"><label htmlFor={name}>{label}</label><input id={name} name={name} type={type} autoComplete={autoComplete} required minLength={type === 'password' ? 8 : undefined} placeholder={placeholder} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} onChange={() => { setErrors(previous => ({...previous, [name]: undefined})); setMessage(''); }} />{errors[name] && <p className="field-error" id={`${name}-error`}>{errors[name]}</p>}</div>;
  }
  return <form className="content-panel account-form" noValidate onSubmit={submit}>
    {register && field('name', 'Nome completo', 'text', 'name', 'Seu nome completo')}
    {field('email', 'E-mail', 'email', 'email', 'voce@exemplo.com')}
    {field('password', 'Senha', 'password', register ? 'new-password' : 'current-password', 'Pelo menos 8 caracteres')}
    {register && field('confirmation', 'Confirmação de senha', 'password', 'new-password', 'Repita sua senha')}
    {!register && <a href="#account-status" className="forgot-link" onClick={event => { event.preventDefault(); setMessage('A recuperação de senha estará disponível após a integração com o backend.'); }}>Esqueceu sua senha?</a>}
    <p className="form-note">{register ? 'O cadastro estará disponível após a integração com o backend.' : 'O acesso estará disponível após a implementação do backend.'} Os dados não são enviados ou salvos pelo site.</p>
    <button className="button" type="submit">{register ? 'Criar conta' : 'Entrar'}</button>
    <p id="account-status" role="status" className="form-note">{message}</p>
    <p className="account-link">{register ? 'Já tem uma conta? ' : 'Ainda não tem uma conta? '}<Link to={register ? '/login' : '/cadastro'}>{register ? 'Login' : 'Cadastro'}</Link></p>
  </form>;
}
