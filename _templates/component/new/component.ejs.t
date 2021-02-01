---
to: components/<%= h.inflection.classify(name) %>/<%= h.inflection.classify(name) %>.tsx
---
<% formattedName = h.inflection.classify(name) -%>
import { FunctionalComponent } from "preact";

interface Props {
  prop1?: any;
}

/**
 * <%= formattedName %>
 * Describe any relevant information regarding this component
 */
export const <%= formattedName %>: FunctionalComponent<Props> = ({ prop1 }) => {
    return (
      <div className="<%= h.inflection.dasherize(name) %>">
        <h1>Hola! <%= formattedName %> Created!</h1>
      </div>
    );
}

