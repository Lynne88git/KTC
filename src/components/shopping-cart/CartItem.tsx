import { Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import ProductList from '../../data/ProductList'

interface CartItemProps {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const product = ProductList.find((p) => p.id === id)
  if (product == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
    </Stack>
  )
}
