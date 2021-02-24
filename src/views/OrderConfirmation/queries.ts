import gql from "graphql-tag"
import { OrderFragment } from "../ReviewOrder/queries"

export const CreateDraftOrderMutation = gql`
  mutation ProductVariantCreateDraftOrder($input: CreateDraftedOrderInput!) {
    createDraftedOrder(input: $input) {
      id
      ...OrderFragment
    }
  }
  ${OrderFragment}
`
