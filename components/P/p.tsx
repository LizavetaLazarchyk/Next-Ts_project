import { PProps } from './p.props';
import styles from './p.module.css';
import cn from 'classnames';


const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
	return(
    <p className={cn(styles.paragraph, className, {
      [styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.l]: size == 'l',
    })}
      {...props}>
      {children}
    </p>
  )
};

export default P;