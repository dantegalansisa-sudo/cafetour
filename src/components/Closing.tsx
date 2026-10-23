import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import TikTokIcon from './TikTokIcon';
import Logo from './Logo';
import MagneticButton from './MagneticButton';
import RevealText from './RevealText';
import { useLang } from '../i18n';
import { useBooking } from '../booking';
import { useParallax } from '../hooks/useParallax';
import { CONFIG, tiktokUrl, waLink } from '../config';
import { EXCURSIONS, excursionPath } from '../data';

export function CtaBand() {
  const { t } = useLang();
  const { book } = useBooking();
  const { ref, y } = useParallax(70);
  return (
    <section className="cta" ref={ref}>
      <motion.img src="/images/catamaran.webp" alt="" className="cta__img" style={{ y, scale: 1.25 }} loading="lazy" />
      <div className="cta__shade" />
      <div className="container cta__inner">
        <p className="eyebrow eyebrow--light">{t.cta.eyebrow}</p>
        <RevealText tag="h2" className="cta__title">{t.cta.title}</RevealText>
        <p className="cta__text">{t.cta.text}</p>
        <div className="cta__btns">
          <MagneticButton className="btn btn--primary btn--lg" onClick={() => book()}>
            {t.cta.book} <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton className="btn btn--wa btn--lg" href={waLink(t.booking.waIntro)} target="_blank">
            <WhatsAppIcon size={18} /> {t.cta.wa}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__tag">{f.tagline}</p>
        </div>
        <div>
          <h4>{f.links}</h4>
          <ul>
            <li><Link to="/#inicio">{t.nav.home}</Link></li>
            <li><Link to="/#tours">{t.nav.tours}</Link></li>
            <li><Link to="/#experiencias">{t.nav.experiences}</Link></li>
            <li><Link to="/#galeria">{t.nav.gallery}</Link></li>
            <li><Link to="/#faq">{t.nav.faq}</Link></li>
            <li><Link to="/#reservar">{t.nav.book}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{f.adventures}</h4>
          <ul>
            {EXCURSIONS.slice(0, 6).map((x) => (
              <li key={x.slug}><Link to={excursionPath(x.slug)}>{x.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{f.contact}</h4>
          <ul className="footer__contact">
            <li><a href={waLink(t.booking.waIntro)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> WhatsApp {CONFIG.phoneDisplay}</a></li>
            <li><a href={CONFIG.phoneHref}><Phone size={16} /> {CONFIG.phoneDisplay}</a></li>
            <li><a href={tiktokUrl} target="_blank" rel="noopener noreferrer"><TikTokIcon size={16} /> @{CONFIG.tiktok}</a></li>
            <li><Clock size={16} /> {CONFIG.hours}</li>
            <li><MapPin size={16} /> {CONFIG.address}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {CONFIG.brand}. {f.rights}</span>
        <span className="footer__slogan">{f.slogan}</span>
      </div>
    </footer>
  );
}
