import Htag from '../components/Hteg/htag';
import Button from '../components/Button/button';
import P from '../components/P/p';

export default function Home(): JSX.Element {
  return(
    <div>
      <Htag tag='h1'>Текст</Htag>
      <Button appearence='primary' className='lgs' arrow='right'>Кнопка</Button>
      <Button appearence='ghost' arrow='right'>Кнопка</Button>
      <P size='s'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque nam praesentium aliquid in distinctio aspernatur, a consequatur qui hic labore! Ad cupiditate tempora enim delectus saepe! Inventore, fugit quam.</P>
    </div>
  )
}