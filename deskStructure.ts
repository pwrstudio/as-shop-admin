import {
    MdTextFields,
    MdList,
    MdShop
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("AS SHOP")
        .items([
            S.listItem()
                .title("Page list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id("page-list")
                        .title("Page list")
                        .schemaType("page-list")
                        .documentId("page-list")
                ),
            S.listItem()
                .title("Pages")
                .icon(MdTextFields)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "page" })
                ),
            S.listItem()
                .title("Products")
                .icon(MdShop)
                .child(
                    S.documentList()
                        .title('Products')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "product" })
                ),
        ])
