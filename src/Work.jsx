import { useEffect } from "react";
import ActionLink from "./ActionLink";
import {
  capabilityGroups,
  experienceTimeline,
  primaryContactHref,
  siteMeta,
  workContent,
  workPrinciples,
} from "./siteContent";

function Work() {
  useEffect(() => {
    document.title = "Work | Shreyash Pandey";
  }, []);

  return (
    <main className="page-body" id="main-content" tabIndex={-1}>
      <header className="page-header">
        <div className="page-header__inr section">
          <div className="page-header__content is-onscreen">
            <div className="article-heading">
              <span className="article-heading__byline">{workContent.eyebrow}</span>
              <h1 className="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l">
                <span>
                  {workContent.title}
                  <span className="dot">.</span>
                </span>
              </h1>
            </div>
            <p className="page-header__lede t-primary lh-loose t-body:s t-sublede:m t-lede:l reveal-content">
              {workContent.intro}
            </p>
          </div>
        </div>
      </header>

      <section className="section is-onscreen">
        <div className="article-list reveal-content">
          {experienceTimeline.map((item) => (
            <article className="article-listing article-list__item" key={item.period}>
              <span className="article-listing__date">{item.period}</span>
              <div className="article-listing__content flow">
                <h2 className="article-listing__title t-heading t-lede:s t-medium:m t-medium:l">
                  {item.role}
                </h2>
                <p className="signal-meta">
                  {item.company} • {item.location}
                </p>
                <p>{item.summary}</p>
                <ul className="signal-bullet-list">
                  {item.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section is-onscreen">
        <div className="article-heading article-heading--small">
          <span className="article-heading__byline">Operating principles</span>
          <h2 className="article-heading__title t-heading t-lede:s t-medium:m t-medium:l">
            <span>
              How I ship
              <span className="dot">.</span>
            </span>
          </h2>
        </div>

        <div className="signal-grid signal-grid--2 reveal-content">
          {workPrinciples.map((principle) => (
            <article className="signal-card" key={principle.title}>
              <h3 className="signal-card__title">{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section is-onscreen">
        <div className="article-heading article-heading--small">
          <span className="article-heading__byline">Capability map</span>
          <h2 className="article-heading__title t-heading t-lede:s t-medium:m t-medium:l">
            <span>
              What teams get from me
              <span className="dot">.</span>
            </span>
          </h2>
        </div>

        <div className="signal-grid signal-grid--3 reveal-content">
          {capabilityGroups.map((group) => (
            <article className="signal-card" key={group.title}>
              <h3 className="signal-card__title">{group.title}</h3>
              <ul className="signal-chip-list">
                {group.items.map((item) => (
                  <li className="signal-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section is-onscreen">
        <div className="signal-callout reveal-content">
          <p className="signal-eyebrow">Role fit</p>
          <h2 className="t-heading t-lede:s t-medium:m t-medium:l">
            I am strongest where engineering discipline and AI product work meet
            <span className="dot">.</span>
          </h2>
          <p>{siteMeta.contactBlurb}</p>
          <div className="signal-action-row">
            <ActionLink href={primaryContactHref} label="Discuss an opportunity" />
            <ActionLink label="See flagship projects" to="/projects" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;