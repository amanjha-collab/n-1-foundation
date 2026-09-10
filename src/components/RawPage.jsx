import parse, { domToReact } from 'html-react-parser';
import { Link } from 'react-router-dom';
import VideoCarousel from './VideoCarousel.jsx';

// Renders a captured page body (raw HTML) faithfully, but upgrades internal
// anchors to React Router <Link>s so navigation stays client-side (no full
// reload, no server 404 on refresh). External / hash / mailto / tel links are
// left as normal anchors. A special marker element (data-embed="...") can be
// used in the raw HTML to substitute in a real interactive React component.
const embeds = {
  'video-carousel': VideoCarousel,
};

const options = {
  replace(node) {
    if (node.type === 'tag' && node.name === 'div' && node.attribs?.['data-embed']) {
      const Embed = embeds[node.attribs['data-embed']];
      if (Embed) return <Embed />;
    }
    if (node.type === 'tag' && node.name === 'a') {
      const href = node.attribs?.href || '';
      const hasDownload = node.attribs?.download !== undefined;
      const opensNewTab = node.attribs?.target === '_blank';
      const isInternal = href.startsWith('/') && !href.startsWith('//') && !hasDownload && !opensNewTab;
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
