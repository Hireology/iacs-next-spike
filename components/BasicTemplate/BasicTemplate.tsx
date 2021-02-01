import { FunctionComponent } from 'preact';
import { BasicTemplateStyles } from './BasicTemplateStyles';
import { Route } from '../../types';

/**
 * BasicTemplate
 * * Renders basic template
 * * Passes template style information to BasicTemplateStyles
 */
interface Props {
    styles: {
        brandColor: string;
        linkColor: string;
        textColor: string;
        backgroundColor: string;
    };
    layout: Route;
}
export const BasicTemplate: FunctionComponent<Props> = ({ styles, layout }) => {
    if (!layout) return <div>Sorry! This page was not found.</div>;
    const { name, layout: pageData } = layout;

    return (
        <BasicTemplateStyles styles={styles}>
            <div className="hero--sub">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="hero__title">{name}</h1>
                    </div>
                </div>
                <div className="hero-tint" />
            </div>

            <div className="content">
                <div className="container">
                    <h2>{pageData?.data?.general?.title}</h2>
                    <p>{pageData?.data?.general?.description}</p>
                </div>
            </div>

            {pageData?.data?.awards && (
                <div className="content--shaded">
                    <div className="container">
                        <h2>{pageData?.data?.awards.title}</h2>
                        <ul className="image__list">
                            {pageData?.data?.awards.list.map((award) => (
                                <li>
                                    <img src={award?.logo} />
                                    <br />
                                    {award?.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {pageData?.data?.community && (
                <div className="content">
                    <div className="container">
                        <h2>{pageData?.data?.community.title}</h2>
                        <p>{pageData?.data?.community.description}</p>
                        <p>
                            <img src={pageData?.data?.community?.image} />
                        </p>
                        {pageData?.data?.community.details.map((detail) => (
                            <div className="text__list">
                                <p className="text__item">
                                    <strong>{detail?.title}</strong>
                                </p>
                                <br />
                                <p>{detail?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </BasicTemplateStyles>
    );
};
