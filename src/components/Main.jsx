import style from './Main.module.css';
import comics from '../data/comics.js';

function render_heroes_cards(cards) {
    return (cards.map((card) => {
        const { series, thumb, id } = card;
        return (
            <div key={id} className={style.card}>
                <img src={thumb} alt={series}/>
                <h3>{series}</h3>
            </div>
        );
    }))
};
function Main() {
    let heroes_cards = render_heroes_cards(comics);

    return (
        <main className={style.container}>
            <div className={style.heroes}>
                <img src="/img/jumbotron.jpg" alt="Heroes"/>
            </div>

            <section className={style.series}>
                <div className={style.section_title}>CURRENT SERIES</div>

                <div className={style.series_container}>
                    {heroes_cards}
                </div>

                <div className={style.btn_container}>
                    <button>LOAD MORE</button>
                </div>
            </section>
        </main>
    )
}

export default Main;