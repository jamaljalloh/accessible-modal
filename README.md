# Accessible Modal

Attempt at creating a WCAG 2.1 AA compliant modal, view [commit history](https://github.com/jamaljalloh/accessible-modal/commits/main) to get idea of how it was iterated - created with [CRA](https://create-react-app.dev/docs/adding-typescript/#installation) and using [stitches](https://stitches.dev/) for styling

<https://user-images.githubusercontent.com/45198758/220814646-3b7c004d-47a8-4d7a-a8f2-8f3b08635937.mp4>

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

## Extensions ideas given more time

- Pull useEffect within [Modal](src/components/Modal/Modal.tsx#L37) into separate hook
- Add ability to pass in any trigger button
- Add close button to Modal Header

## Screenshots

![image](https://user-images.githubusercontent.com/45198758/220857608-0d68bd47-4d2a-4b07-9f2f-733db688c8a7.png)
