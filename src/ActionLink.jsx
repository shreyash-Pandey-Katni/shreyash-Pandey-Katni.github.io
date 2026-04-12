import { Link } from "react-router-dom";

function ActionLink({ href, label, small = false, to, external = false }) {
  const className = small ? "btn btn--small" : "btn";
  const content = (
    <>
      <span className="btn__label">{label}</span>
      <span className="btn__fill stripes" data-drift="-10 -12" aria-hidden="true">
        {label}
      </span>
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

export default ActionLink;