import { useState } from "react";

export default function MemberForm(props) {
  const [member, setMember] = useState({ isim: "", email: "", rol: "" });

  const changeHandler = (e) => {
    console.log("changeTarget", e.target.value);
    const newMemberState = { ...member, [e.target.name]: e.target.value };
    setMember(newMemberState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addMemberCallbackProp(member);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        İsim:
        <input
          value={member.isim}
          name="isim"
          onChange={(e) => changeHandler(e)}
        />
      </label>
      <hr />
      <label>
        Email:
        <input
          value={member.email}
          name="email"
          onChange={(e) => changeHandler(e)}
        />
      </label>
      <hr />
      <label>
        Rol:
        <input
          value={member.rol}
          name="rol"
          onChange={(e) => changeHandler(e)}
        />
      </label>
      <br />
      <button type="submit">Ekle</button> <hr />
      Yazdığın isim {member.isim} <br />
      Yazdığın email {member.email} <br />
      Yazdığın rol {member.rol} <br />
    </form>
  );
}
