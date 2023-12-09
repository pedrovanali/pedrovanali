import { Adaptive } from "../hooks/useAdaptiveTriggers";

export enum Pages {
  education = "education",
  college = "college",
  techCourse = "techCourse",
  awsBadge = "awsBadge",
  companies = "companies",
  techStack = "techStack",
  contact = "contact",
}

export interface PageConfig {
  sticky?: { start: number; end: number };
  factor?: number;
  offset: number;
  speed: number;
}

export interface LayoutConfig {
  pages: number;
}

export const ParallaxConfig: Record<
  Adaptive,
  Record<Pages, PageConfig> & LayoutConfig
> = {
  [Adaptive.xs]: {
    pages: 5,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
    },
    [Pages.college]: {
      factor: 1,
      offset: 2,
      speed: 2,
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 3,
      speed: 3,
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 4,
      speed: 2.8,
    },
    [Pages.companies]: {
      offset: 0.15,
      factor: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      offset: 0.55,
      factor: 5,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 4,
      factor: 1,
      speed: 2.8,
    },
  },
  [Adaptive.sm]: {
    pages: 4,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
    },
    [Pages.college]: {
      factor: 1,
      offset: 2,
      speed: 2,
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 3,
      speed: 3,
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 4,
      speed: 2.8,
    },
    [Pages.companies]: {
      factor: 0.15,
      offset: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      offset: 0.55,
      factor: 5,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 2,
      factor: 1,
      speed: 2.8,
      sticky: { start: 3.8, end: 4 },
    },
  },
  [Adaptive.md]: {
    pages: 4,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
      sticky: {
        start: 1,
        end: 3,
      },
    },
    [Pages.college]: {
      factor: 1,
      offset: 1.2,
      speed: 2,
      sticky: { start: 1.2, end: 2 },
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 1.5,
      speed: 3,
      sticky: { start: 1.5, end: 2 },
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 2.4,
      speed: 2.8,
      sticky: { start: 2.4, end: 3 },
    },
    [Pages.companies]: {
      offset: 0.15,
      factor: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      sticky: { start: 0.5, end: 3.5 },
      offset: 0.55,
      factor: 0.15,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 3,
      factor: 1,
      speed: 2.8,
    },
  },
  [Adaptive.lg]: {
    pages: 4,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
      sticky: {
        start: 1,
        end: 3,
      },
    },
    [Pages.college]: {
      factor: 1,
      offset: 1.2,
      speed: 2,
      sticky: { start: 1.2, end: 2 },
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 1.5,
      speed: 3,
      sticky: { start: 1.5, end: 2 },
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 2.4,
      speed: 2.8,
      sticky: { start: 2.4, end: 3 },
    },
    [Pages.companies]: {
      offset: 0.15,
      factor: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      sticky: { start: 0.5, end: 3.5 },
      offset: 0.55,
      factor: 0.15,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 3,
      factor: 1,
      sticky: { start: 3, end: 4 },
      speed: 2.8,
    },
  },
  [Adaptive.xl]: {
    pages: 4,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
      sticky: {
        start: 1,
        end: 3,
      },
    },
    [Pages.college]: {
      factor: 1,
      offset: 1.2,
      speed: 2,
      sticky: { start: 1.2, end: 2 },
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 2.2,
      speed: 3,
      sticky: { start: 2.2, end: 2.4 },
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 2.5,
      speed: 2.8,
      sticky: { start: 2.5, end: 3 },
    },
    [Pages.companies]: {
      offset: 0.15,
      factor: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      sticky: { start: 0.5, end: 3.5 },
      offset: 0.55,
      factor: 0.15,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 3,
      factor: 1,
      speed: 2.8,
    },
  },
  [Adaptive.xxl]: {
    pages: 4,
    [Pages.education]: {
      factor: 1,
      offset: 1,
      speed: 3,
      sticky: {
        start: 1,
        end: 3,
      },
    },
    [Pages.college]: {
      factor: 1,
      offset: 1.2,
      speed: 2,
      sticky: { start: 1.2, end: 2 },
    },
    [Pages.techCourse]: {
      factor: 1,
      offset: 1.5,
      speed: 3,
      sticky: { start: 1.5, end: 2 },
    },
    [Pages.awsBadge]: {
      factor: 1,
      offset: 2.4,
      speed: 2.8,
      sticky: { start: 2.4, end: 3 },
    },
    [Pages.companies]: {
      offset: 0.15,
      factor: 0.15,
      speed: 0.75,
    },
    [Pages.techStack]: {
      sticky: { start: 0.5, end: 3.5 },
      offset: 0.55,
      factor: 0.15,
      speed: 2,
    },
    [Pages.contact]: {
      offset: 2.2,
      factor: 1,
      speed: 2.8,
    },
  },
};
