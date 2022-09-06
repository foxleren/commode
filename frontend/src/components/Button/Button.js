import './Button.scss';

export default function Button({content = 'default text', action = () => {}, type = 'book', color ='white', mode = 'light'}) {
    return (
        <div className={`button ${type} ${color} ${mode}`} onClick={action}>
            {content}
        </div>
    );
}