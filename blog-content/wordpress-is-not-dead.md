---
title: "WordPress Is Not Dead, but You Might Go Crazy Trying to Kill It"
date: "2026-11-02"
description: "An article clarifying what it might mean when someone says WordPress is Dead and whether vibe-coding, code harnesses, and agents will replace or improve WordPress."
category: "general"
tags: ["wordpress", "web design", "UX", "systems"]
author: "Jakob Smith"
---

## It Begins

My feeds are pummeling me with hot takes on WordPress, and I'm fed up. So here's a more nuanced take:

- Software is a cyclical ecosystem, not a linear timeline.
- No software is dead if at least one entity finds a part of it useful.
- Some take what works to innovate a better solution, while others make what works work better.
- Free software lowers some barriers to adoption, but its lasting value depends on the communities around it.

## DHH Did Not Say Rails Is Dead and Is Your Software Ready for Tokenomics?

To me, the "WordPress is dead" controversy is comparable to the "Rails is dead" controversy.

DDH did not say in a [recent talk](https://www.youtube.com/watch?v=vDjW_dRyKXY) that "Rails is Dead" even though I've seen some folks claim he did and that he's joined the prompt zombies. Just check out the comment section of this video.

What he actually said:

> "Abstractions don't make quite the same sense in the age of agents."
>
> [DHH, approximately 43 minutes into the keynote](https://www.youtube.com/watch?v=vDjW_dRyKXY&t=2578s)

Unfortunately for those of us in the WordPress camp, we [don't have an owner with this level of charisma](https://demaree.me/p/the-unworthy-ungrateful-manchildren-of-tech/) which is why I don't have a quote to point too from Matt in 2026. Even so, the nonstop fire hose of "Software is Dead" hot takes proves that no matter your CEO's charisma buff, someone, somewhere will craft a salient straw-man argument to leverage a sales pitch with anyway.

DHH's conclusion strikes at the heart of the matter though, in both Rails and WordPress ecosystems:
We built web software for a specific set of constraints for many years, and then in [December 2025](https://phoson.lat/research/agent-harness-state-of-the-art), those constraints radically changed with AI adoption and we need to address the foundations of our assumptions.

Earlier in the talk, he made another point about Rails that could translate into the next chapter of a sector of WordPress's ecosystem:

> "Convention over configuration leads directly to things like token efficiency."
>
> [DHH, approximately 34 minutes into the keynote](https://www.youtube.com/watch?v=vDjW_dRyKXY&t=2018s)

So, do WordPress's conventions help more than its configuration gets in the way? And will the systems we build around it be ready for the economics of agent-assisted development?

Google's [token-efficient software engineering guidance](https://cloud.google.com/blog/topics/developers-practitioners/guide-to-ai-tokenomics-eleven-principles-for-token-efficient-software-engineering) recommends reusable skills, explicit instructions, targeted context, and testing rather than repeated corrective prompts. That supports taking conventions seriously, although it isn't an empirical benchmark proving which framework is best for AI-driven coding in the future.

## Is WordPress Out of the Box Conventional? Sort Of.

WordPress began as blogging software. Its origins remain visible: posts are chronological entries, while pages and custom post types support other kinds of content. ([Learn WordPress](https://learn.wordpress.org/lesson-plan/custom-post-types/))

When you're building a website around authors and dated content, WordPress supplies familiar publishing conventions: contributor roles, drafts, scheduling, revisions, categories, and tags. The software is free to use and licensed to modify, with localization support built in. Those publishing conventions make its usefulness for international news, blogs, and editorial workflows easy to understand and [widely adopted for that purpose](https://wplift.com/famous-brands-using-wordpress-as-their-cms/).

But the next step beyond blogging is where the controversy begins: the freedom to extend WordPress into almost anything.

- **WooCommerce** adds products and commerce, using its own data-access abstractions over WordPress's custom post system and custom tables. ([WooCommerce data stores](https://developer.woocommerce.com/docs/best-practices/data-management/data-stores/))
- **Gravity Forms** adds forms, storing form definitions and submissions in dedicated database tables rather than treating everything as a transformation of a blog post. ([Gravity Forms database structure](https://docs.gravityforms.com/database-storage-structure-reference/))
- **HumanKind Funeral Suite** registers custom post types for caskets, cremation urns, headstones, and memorial keepsakes. I just wanted to drive the point home. ([Plugin documentation](https://github.com/HumanKind-nz/hk-funeral-suite))

These extensions can share WordPress's foundation without sharing the same application architecture or storage model. WooCommerce and Gravity Forms demonstrate that distinction: one exposes replaceable data stores, while the other documents dedicated tables for forms and entries. ([WooCommerce data stores](https://developer.woocommerce.com/docs/best-practices/data-management/data-stores/), [Gravity Forms database structure](https://docs.gravityforms.com/database-storage-structure-reference/))

At that point, we're far beyond blogging, but not necessarily outside WordPress's scope: its own documentation explicitly presents it as an application framework, with support for REST APIs, user management, and custom routing. ([WordPress developer features](https://wordpress.org/about/features/))

My concern isn't extension itself. It's whether those extensions form a coherent system, or if those extensions leave the next developer-agent pair explaining to an agent why they were implemented that way and what it should or should not do next.

Every undocumented exception is another thing a developer or agent has to discover before making a safe change. How much explanation does our implementation require? That's where I see the challenge for the WordPress ecosystem heading into an AI future.

## Once the Average WordPress Project Gets Underway, Does It Become More Coherent?

Often, a WordPress project is not coherent.
This is where the semantics of "WordPress" get dicey.
When the average poster types up "WordPress is Dead", what do they mean when they say WordPress?

Oftentimes, they mean the following:

- 53 free plugins out of date installed by a non-technical user
- A monolithic Page Builder filled with contrived templating decisions
- Missing version control, dependency management, vetted hosting or modern development practices
- A bizzare plugin that stores back and front end code in the database tables
- A CodeCanyon theme filled with bloated features no one uses or can keep stable on update

This is where free and easy turn into a nightmare for the WordPress ecosystem and WordPress professionals have been struggling to separate themeselves from these choices while struggling to sell potential clients on a future that moves away from this.

And all this was happening before AI.

Now that AI is here, and I will conceed that the above problems are very real and common, why wouldn't we use AI to move away from them?

But the assumption of where we go is what actually determines the next step in the lifecycle of WordPress: What do we replace these intended features with? All those poor techncial decisions listed above actually work for designers and clients and they often feel a sense of ownership and pride over it, before a WordPress dev convinces them of the risks and shows them "a better way".

Every seasoned WordPress developer then runs into the next problem, the painful tradeoffs of a well-designed system versus the quick and cheap build with a slick paint job on launch day.

## Salience versus Sustainability

Even the smartest and most capable non-technical clients and designers often prefer four things from a website:

- Speed
- Control
- Feeling good when they see the live site
- Getting just one compliment, phone call or email after going live because of the website

Don't get me wrong here, I am not patronizing my clients, I myself have fallen into this human trap myself with my own custom products.

We know security, maintainability, structure, and code quality matter. But can people experience them as directly as page animations, a hero video, or an analytics dashboard? Even if they understand the benefits and trust us, how do they judge the quality of work whose success often means nothing goes wrong? And what are they willing to trade for it?

Let me provide an analogy us devs as craftspeople can relate to:

At a party, I met a carpenter who built custom cabinets. She told me the secret to impressing clients: pneumatic soft-close hardware that kept doors and drawers from slamming.

Clients would admire the paint and the smell of the wood. Then they’d close a cabinet, watch it ease shut, and marvel at the craftsmanship.

What she said next made me laugh out loud with recognition. She explained that clients rarely noticed the carefully selected and treated wood, the specially formulated paint, the precise fit around their appliances, or the insulation near the oven. They didn’t see the vendor relationships that helped her keep costs down.

But they noticed that soft-close mechanism. Without it, she barely got a compliment.

The carpenter's frustration doesn't make the customer's preference wrong.
The dev's techincal preference doesn't preempt the client's experience.

This is where the industry, budget and circumstances play a larger role than I see "WordPress is Dead" posts actually revealing.

## When a Community Builds a System Around WordPress, Can It Become More Conventional?

This is why professional WordPress developers built and adopted structured stacks such as [Roots](https://roots.io/), [Themosis](https://framework.themosis.com/), or [Lumberjack](https://lumberjack.rareloop.com/). Roots' Acorn brings Laravel components into WordPress, including Blade, routing, and Eloquent ORM. Themosis documents an MVC structure built with Symfony and Illuminate packages. Lumberjack provides controllers, routing, dependency injection, and Timber's Twig templates.

The professional development approach I'm describing goes beyond the framework: a deliberately selected plugin stack, an internal repo of reusable custom solutions, and documented use of idempotnent WordPress filters and actions. WordPress supplies the hook mechanism; the team still has to decide how consistently to use it. ([WordPress hooks](https://developer.wordpress.org/apis/hooks/))

Then come the managed hosts, asset offloaders, video streaming services, and monitoring tools selected around that stack. My point isn't that every professional team makes the same choices. It's that these choices become part of the system a replacement has to account for.

Sexy and salient? No. But man, those systems take a lot of time and smart people working together to build and maintain.

There is a concrete connection to agent workflows here, not just an analogy. GitHub documents repository-wide and path-specific instructions for giving Copilot project context, and OpenAI documents using repository instructions and reusable skills to preserve development and verification workflows. Neither establishes that a particular WordPress stack is superior, but both make the conventions around a codebase more relevant. ([GitHub custom instructions](https://docs.github.com/en/copilot/reference/custom-instructions-support), [OpenAI's repository workflow example](https://developers.openai.com/blog/skills-agents-sdk))

## The Sales Formula and Playing Devil's Avocado

The formula I'm criticizing reduces a new experience with LLMs to an unscoped business conclusion: replace the old system, while making you and your chosen code harness a major dependency alongside a newer set of code practices.

WordPress or AI-generated code out of the box is one thing. The system a team builds around it is another.

Some teams accumulate exceptions. Others develop consistent application structure, reusable components, documented workflows, and deliberately managed dependencies.

The better question for professional WordPress developers is:

> Does WordPress, alongside my chosen systems, still solve my client's problems if the alternative is an AI-based system that the client wants to use without me?

And even scarier:

> Will a chat harness be that system for my client?

And the most terrifying:

> Once agentic conventions are widely adopted around a website-building system, can I help my clients move when it genuinely serves them better, without confusing their interests with my livelihood?

## No Need to Be an Island If Your Client Doesn't Have a Lifeboat

If agents benefit from conventions, why assume conventional WordPress systems are only candidates for replacement? They may also be environments agents can work within.

That possibility is already visible in one part of the ecosystem: WordPress.com documents MCP tools that let external agents work with content, settings, and other site functions while respecting WordPress user-role permissions. That isn't proof that every WordPress installation is agent-ready. It is a concrete example of agents working through an existing system rather than replacing it. ([WordPress.com MCP documentation](https://wordpress.com/support/mcp/))

That doesn't guarantee anyone's survival or justify every dependency. It means the comparison has to include the actual system and people, not just an idea of WordPress somebody replaced.

Lastly, the standard cuts both ways: when we vibe-code our clients' sites, have we built something another developer-agent pair can understand? Or have we prompted ourselves onto an island of undocumented dependencies, with ourselves as the only bridge to a technology we don't control?
