import style from "./Home.module.scss";

function Home()
{
    return (


        <body className={style.Body}>

            <div className={style.contents}>
                컨텐츠
            </div>
            <div className = {style.notice}>
                게시판
            </div>

        </body>

    );
}



export default Home;