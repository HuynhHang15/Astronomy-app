import classNames from 'classnames/bind'
import style from './Footer.module.scss'

import { Link } from 'react-router-dom'
import image_footer from '~/asset/images/image_footer.jpg'

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('footer')} style={{backgroundImage:`url(${image_footer})`}}>
        <div className={cx('footer-link')}>
            <Link className={cx('link-item')} to="/">Home</Link>
            <Link className={cx('link-item')} to="/">Images</Link>
            <Link className={cx('link-item')} to="/">Videos</Link>
        </div>
        <div className={cx('footer-link')}>
            <Link className={cx('link-item')} to="/">Live</Link>
            <Link className={cx('link-item')} to="/">FAQ</Link>
            <Link className={cx('link-item')} to="/">Premium</Link>
            <Link className={cx('link-item')} to="/">Privacy policy</Link>
        </div>
        <div className={cx('footer-link')}>
            <Link className={cx('link-item')} to="/">You must watch</Link>
            <Link className={cx('link-item')} to="/">Recent release</Link>
            <Link className={cx('link-item')} to="/">Top IMDB</Link>
        </div>
    </div>
  )
}

export default Footer