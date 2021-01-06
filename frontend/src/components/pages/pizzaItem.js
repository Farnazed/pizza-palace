const PizzaItem = ({ toppingName, toppingOptions, onClick, option, price }) => {
  return (
    <div className="px-5 col-md-4 col-sm-12">
      <h5 className="text-left">{toppingName}: </h5>
      <ul className="text-left list-group list-group-flush">
        {toppingOptions.map((item) => (
          <li className="list-group-item" key={item.id}>
            <input
              className="form-check-input"
              checked={option.includes(item.id) ? true : false}
              type="checkbox"
              value={item.id}
              id={item.id}
              onChange={onClick}
            />
            <label className="form-check-label" for={item.id}>
              {item.value} ${parseFloat(price)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PizzaItem;
