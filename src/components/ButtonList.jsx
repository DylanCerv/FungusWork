export const ButtonList = ({ categories, filterCategory, selectedCategory }) => {
	return (
	  <div className='categories'>
		{categories ? (
		  categories.map((category) => (
			<button
			  type='button'
			  className={`btn-category ${selectedCategory === category ? 'active' : ''}`}
			  onClick={() => filterCategory(category)}
			  key={category}
			>
			  {category}
			</button>
		  ))
		) : (
		  <p>No categories available.</p>
		)}
	  </div>
	);
  };
  