# Accessible Modal

Attempt at creating a WCAG 2.1 AA compliant modal, view [commit history](commits/main) to get idea of how it was iterated - created with [CRA](https://create-react-app.dev/docs/adding-typescript/#installation) and using [stitches](https://stitches.dev/) for styling

##  Key Parts

- [Focus Trap Hook](src/hooks/useFocusTrap.tsx)
- [Base Modal Component](src/components/Modal/Modal.tsx)
- [Modal Variant / Implementation](src/components/Modal/Variants/ApplyLoan/ApplyLoanModal.tsx)

##  Design Inspiration

- <https://www.radix-ui.com/docs/primitives/components/dialog>

## Helpful Accessibility Material

- <https://www.sarasoueidan.com/blog/focus-indicators/#new-focus-indicator-accessibility-requirements-in-wcag-2.2>

- <https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/>

- <https://ebay.gitbook.io/mindpatterns/disclosure/lightbox-dialog>

## Extensions Ideas given more time

- Pull useEffect within [Modal](src/components/Modal/Modal.tsx#L37) into separate hook
- Add ability to pass in any trigger button
- Add close button to Modal Header
