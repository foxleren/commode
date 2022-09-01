import './Button.scss';

export default function Button({content = 'default text', type = 'book', color ='white', mode = 'light'}) {
    return (
        <div className={`button ${type} ${color} ${mode}`}>
            {content}
        </div>
    );
}