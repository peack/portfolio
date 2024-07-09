export interface TExperience {
  title: string;
  date_start?: string;
  date_end?: string;
  description: string;
  id: string;
  references?: TReference[];
}

export interface TReference {
  name: string;
  iconLink: string;
  href: string;
}
