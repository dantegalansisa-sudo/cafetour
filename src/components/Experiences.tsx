import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHead from './SectionHead';
import { useLang } from '../i18n';
import { excursionPath, EXPERIENCES, fmt } from '../data';
import { cardVariants, containerVariants } from '../utils/easings';

const MotionLink = motion.create(Link);

export default function Experiences() {
  const { t } = useLang();
  return (
    <section className="section section--sand" id="experiencias">
      <div className="container">
        <SectionHead eyebrow={t.experiences.eyebrow} title={t.experiences.title} accent={t.experiences.titleAccent} text={t.experiences.text} />
        <motion.div className="exps exps--4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
          {EXPERIENCES.map((e) => (
            <MotionLink key={e.slug} to={excursionPath(e.slug)} className="exp" variants={cardVariants} aria-label={`${t.tours.details}: ${e.name}`}>
              <img src={e.image} alt="" loading="lazy" />
              <span className="exp__shade" />
              {e.priceUSD && (
                <span className="exp__price">
                  {e.per === 'lancha' ? t.tours.priceFrom + ' ' : ''}{fmt(e.priceUSD)}
                  <small>{e.per === 'lancha' ? t.tours.perBoat : t.tours.perPerson}</small>
                </span>
              )}
              <span className="exp__label">
                <span>
                  {e.name}
                  <small>{e.short}</small>
                </span>
                <span className="exp__go"><ArrowUpRight size={18} /></span>
              </span>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
