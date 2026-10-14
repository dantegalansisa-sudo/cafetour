import { motion } from 'framer-motion';
import { Clock, Hotel, Plane, Route } from 'lucide-react';
import SectionHead from './SectionHead';
import MagneticButton from './MagneticButton';
import WhatsAppIcon from './WhatsAppIcon';
import { useLang } from '../i18n';
import { useParallax } from '../hooks/useParallax';
import { waLink } from '../config';
import { cardVariants, containerVariants } from '../utils/easings';

const ICONS = [Plane, Hotel, Route, Clock];

export default function Transport() {
  const { t } = useLang();
  const tr = t.transport;
  const { ref, y } = useParallax(40);
  return (
    <section className="section transport" id="transporte">
      <div className="container transport__grid">
        <div>
          <SectionHead eyebrow={tr.eyebrow} title={tr.title} accent={tr.titleAccent} />
          <p className="transport__text">{tr.text}</p>
          <motion.ul className="transport__list" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {tr.items.map((it, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li key={it.title} variants={cardVariants}>
                  <span className="transport__icon"><Icon size={22} /></span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </motion.li>
              );
            })}
          </motion.ul>
          <MagneticButton className="btn btn--wa btn--lg" href={waLink(tr.waText)} target="_blank">
            <WhatsAppIcon size={18} /> {tr.cta}
          </MagneticButton>
        </div>
        <div className="transport__media" ref={ref}>
          <motion.img src="/images/buggy-crucero.webp" alt="Vehículo frente a la bahía con un crucero" style={{ y, scale: 1.15 }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
