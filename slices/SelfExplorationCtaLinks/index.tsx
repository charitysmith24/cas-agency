import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SelfExplorationCtaLinks`.
 */
export type SelfExplorationCtaLinksProps =
  SliceComponentProps<Content.SelfExplorationCtaLinksSlice>;

/**
 * Component for "SelfExplorationCtaLinks" Slices.
 */
const SelfExplorationCtaLinks = ({
  slice,
}: SelfExplorationCtaLinksProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />
    </section>
  );
};

{
  /* <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for self_exploration_cta_links (variation:{" "}
      {slice.variation}) Slices
    </section> */
}

export default SelfExplorationCtaLinks;
