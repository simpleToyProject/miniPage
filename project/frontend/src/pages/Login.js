import { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { testAccount } from "../recoil/test";
import { isEmpty } from "../utils/checkIsEmpty";

import "../css/Login.css";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const idFocusRef = useRef();

  const account = useRecoilValue(testAccount);

  const navigate = useNavigate();

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const clickLoginBtn = (e) => {
    e.preventDefault();

    if (!isEmpty(id) && !isEmpty(pwd)) {
      checkIdAndPwd();
    } else {
      alert("id 또는 password를 올바르게 입력하세요.");
    }
  };

  const checkIdAndPwd = () => {
    if (id === account.id && Number(pwd) === account.password) {
      navigate("/minihome");
    } else {
      alert("잘못된 계정입니다. 다시 한번 확인하세요.");
    }
  };

  useEffect(() => {
    idFocusRef.current.focus();
  }, []);

  return (
    <div className="container">
      <form className="form" onSubmit={clickLoginBtn}>
        <h1 className="title">Login</h1>
        <div id="msg" className="message message_error"></div>
        <div className="input_group">
          <input
            type="text"
            className="input"
            ref={idFocusRef}
            value={id}
            onChange={changeId}
            placeholder="Username or email"
          />
        </div>
        <div className="input_group">
          <input
            type="password"
            className="input"
            value={pwd}
            onChange={changePwd}
            placeholder="Password"
          />
        </div>
        <button className="btn" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
