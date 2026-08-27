import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';

// Renders a captured page body (raw HTML) faithfully, but upgrades internal
// anchors to React Router <Link>s so navigation stays client-side (no full
// reload, no server 404 on refresh). External / hash / mailto / tel links are
// left as normal anchors.
const options = {
  replace(node) {
    if (node.type === 'tag' && node.name === 'a') {
      const href = node.attribs?.href || '';
      const isInternal = href.startsWith('/') && !href.startsWith('//');
      if (isInternal && !href.startsWith('/#')) {
        const { href: _omit, class: className, ...rest } = node.attribs;
        return (
          <Link to={href} className={className} {...rest}>
            {domToReact(node.children, options)}
          </Link>
        );
      }
    }
  },
};

export default function RawPage({ html }) {
  return <main>{parse(html, options)}</main>;
}
