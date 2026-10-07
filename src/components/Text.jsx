export default function Text({ children, className = '' }) {
  return <p className={`leading-5 ${className}`.trim()}>{children}</p>;
}
