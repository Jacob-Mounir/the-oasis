import { useState } from 'react'
import { useStore } from '../../data/store.js'
import { addProduct, getProducts } from '../../data/crud.js'
import './form.css'

const AddProduct = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [desc, setDesc] = useState('')
	const [imageURL, setImageURL] = useState('')
	const [error, setError] = useState({ title: false, desc: false, price: false, imageURL: false })

	const setProducts = useStore(state => state.setProducts)

	const validateFields = () => {
		const errors = {
			title: !title,
			desc: !desc,
			imageURL: !imageURL,
			price: !price,
		};
		setError(errors);
		// Return true if no errors
		return !Object.values(errors).some(isError => isError);
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsLoading(true)

		// Validate input fields before attempting to submit
		if (!validateFields()) {
			setIsLoading(false);
			return; // Stop the submission if there are validation errors
		}

		const newProduct = { title, desc, imageURL, price }
		try {
			await addProduct(newProduct)
			setTitle('')
			setDesc('')
			setImageURL('')
			setPrice('')
			setProducts(await getProducts())
			setError({ title: false, desc: false, price: false, imageURL: false }) // Reset errors after successful submission
		} catch (error) {
			console.error("Failed to add product:", error);
			// Optionally, handle error (e.g., display a message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form" onSubmit={handleSubmit}>
				<h3>Register a new Product</h3>

				<section className="column">
					<input type="text"
						className={`bubble ${error.title ? 'input-error' : ''}`}
						placeholder='Title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</section>

				<section className="column">
					<input type="text"
						className={`bubble ${error.desc ? 'input-error' : ''}`}
						placeholder='Description'
						value={desc}
						onChange={e => setDesc(e.target.value)}
					/>
				</section>

				<section className="column">
					<input type="text"
						className={`bubble ${error.imageURL ? 'input-error' : ''}`}
						placeholder='Image URL'
						value={imageURL}
						onChange={e => setImageURL(e.target.value)}
					/>
				</section>

				<section className="column">
					<input type="number"
						className={`bubble ${error.price ? 'input-error' : ''}`}
						placeholder='$'
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
				</section>

				<button disabled={isLoading} type="submit">Add</button>
			</form>
		</section>
	)
}

export default AddProduct
