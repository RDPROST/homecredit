import {useSelector} from "react-redux";

export default function User() {
    const {firstName, lastName, org, avatar} = useSelector(state => state.user);

    return (
        <div className="header__user">
            <img
                src={avatar}
                alt="" className="header__user-avatar"/>
            <div className="header__user-group">
                <h4 className="header__user-name">{firstName} {lastName}</h4>
                <p className="header__user-position">{org}</p>
            </div>
        </div>
    )
}