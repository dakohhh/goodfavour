/**
 * Free-to-use images from Pexels (https://www.pexels.com/license/).
 * Direct CDN URLs for reliable loading. Params match Pexels’ CDN format.
 */
const pexels = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&fm=jpg`;

export const images = {
  // Hero: students / education
  studentsLecture: pexels('757855'),    // people at library, studying
  // Why Choose Us: graduation
  graduation: pexels('20985247'),        // cheerful graduated students
  // Study UK section
  library: pexels('6279984'),          // man and woman reading in library
  airplane: pexels('3856702'),          // plane flying over airfield
  campus: pexels('267885'),             // graduates throwing caps (education)
} as const;
