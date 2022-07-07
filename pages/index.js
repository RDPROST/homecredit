import data from '../data/api';
import { useState } from 'react';
import ContentItem from "../components/content/contentItem";
import ContentDescription from "../components/content/contentDescription";
import DefaultButton from "../components/button/DefaultButton";
import ImageBg from "../components/wrapper/ImageBg";
import ContentTitle from "../components/content/ContentTitle";
import FlexOne from "../components/global/FlexOne";
import FlexTwo from "../components/global/FlexTwo";
import ContentUpdate from "../components/content/ContentUpdate";

export default function Home() {
  const [activitySearch, setActivitySearch] = useState('');
  const [update, setUpdate] = useState(false);
  const [typeActivity, setTypeActivity] = useState(true);

  const filteredActivities = data.filter(activity => {

    return activity.name.toLowerCase().includes(activitySearch.toLowerCase()) && typeActivity ? true : activity.type === "my";
  });
  const [activity, setActivity] = useState(data[0]);
  const setActivityById = id => {
    setActivity(data.find(activity => activity.id === id));
  }
  const switchUpdate = () => {
    setUpdate(!update);
  }
  return (
      <>
        <FlexTwo className="white">
          <ImageBg img="https://images.unsplash.com/photo-1655979921395-2316b22235e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80" title="Обучающие активности"/>
          <ContentTitle title="Как управлять обучающими активностями"/>
          <p className="content__text">
            На этой странице мы управляем нашими обучающими активностями. Под обучающей активностью понимается любое
            мероприятие с участием функционального тренера и обучающегося сотрудника. Например: вебинар, тренинг,
            коуч-сессиия и так далее.
            <br/>
            <br/>
            Ты можешь выбрать любую интерисующую тебя активность и записаться на нее. Для этого тебе нужно нажать на
            кнопку “Подробнее”, далее нажать на кнопку “Записаться” и выбрать свободную дату. Если свободных дат
            нет, свяжись с тренером и он подскажет, что делать дальше.
          </p>
          <div className="content__search-block">
            <input type="text"
                   className="search-block__input"
                   placeholder="Поиск по активностям..."
                   onChange={(e) => setActivitySearch(e.target.value)}/>
            <button className="search-block__switch-button" onClick={()=> setTypeActivity(!typeActivity)}>{typeActivity ? "Все активности" : "Мои активности"}</button>
          </div>
          <div className="content__list-block">
            {filteredActivities.map(item => {
              return <ContentItem key={item.id} setActivity={setActivityById} active={activity.id === item.id ? ' list-block__item_active' : ''} {...item}/>
            })}
          </div>
          <DefaultButton className={"content__button"} text={"Создать"} onClick={switchUpdate} />
          {update ? <ContentUpdate {...activity}/> : null}
        </FlexTwo>
        <FlexOne className={!update ? "white": ""}>
          {!update ? <ContentDescription  {...activity}/> : null}
        </FlexOne>
      </>
  )
}
