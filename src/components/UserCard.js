

const UserCard = ({userObj, onDelete, onEdit}) => {

  const months = ['January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December']
  
  const formatDate = (date, months) => {
    const arrDate = date.split("-"); 
    const sortDate = [months[Number(arrDate[1] - 1)], arrDate[2] + ",", arrDate[0]]

    return sortDate.join(" ");
  }

  return (
    <div>
      <h2>{userObj.first_name} {userObj.last_name}</h2>
      <p>{userObj.email}</p>
      <span>{formatDate(userObj.birthday, months)}</span>
      <br />
      <span>
        <button onClick={() => onDelete(userObj.id) } >Delete</button>
        <button onClick={() => onEdit(userObj)} >Edit</button>
      </span>
      <hr />
    </div>
  )
}

export default UserCard