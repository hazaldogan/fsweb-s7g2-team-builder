function MemberListing(props) {
  return (
    <>
      <h3>Üyelerimiz</h3>
      <ul>
        {props.memberList.map((member, i) => {
          return (
            <li key={i}>
              <a href={`mailto:${member.email}`}>{member.isim}</a> ({member.rol}
              )
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MemberListing;
