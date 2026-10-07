import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import ArticlePreview from './components/ArticlePreview/ArticlePreview';
import ArticleCard from './components/ArticleCard/ArticleCard';
import articlePreview from './assets/article-preview.jpg';
import forest1 from './assets/forest-1.jpg';
import forest2 from './assets/forest-2.jpg';
import forest3 from './assets/forest-3.jpg';
import styles from './App.module.css';

const USERNAME = 'Ульяна';

const articles = [
  {
    id: 1,
    image: forest1,
    title: 'Почему стоит посетить Форкс?',
    description:
      'С каждым годом количество посетителей бьет рекорды. Разбираемся почему...',
    initialLikes: 12,
  },
  {
    id: 2,
    image: forest2,
    title: 'Почему стоит посетить Форкс?',
    description:
      'С каждым годом количество посетителей бьет рекорды. Разбираемся почему...',
    initialLikes: 5,
  },
  {
    id: 3,
    image: forest3,
    title: 'Тропы национального парка Олимпик',
    description:
      'Густые леса, туманные вершины и маршруты, которые стоит пройти хотя бы раз...',
    initialLikes: 8,
  },
];

function App() {
  return (
    <div className={styles.page}>
      <Header username={USERNAME} />

      <main className={styles.main}>
        <section className={styles.section}>
          <Profile
            username={USERNAME}
            description="Люблю путешествия, фотографию и долгие прогулки по лесам Вашингтона. Пишу о местах, которые стоит увидеть своими глазами."
          />
        </section>

        <section className={styles.section}>
          <ArticlePreview
            image={articlePreview}
            title="Рассвет над облаками"
            description="Когда долина скрыта туманом, а вершины загораются первым светом..."
          />
        </section>

        <section className={styles.section}>
          <div className={styles.cards}>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                description={article.description}
                initialLikes={article.initialLikes}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
