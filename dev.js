const data = [
  {
    name: 'Финансовый аналитик',
    mainSkills: ['Excel', 'SQL', 'VBA', '1С'],
    otherSkills: ['Power BI', 'Python'],
  },
  {
    name: 'Предприниматель',
    mainSkills: ['1C', 'Excel', 'Power BI'],
    otherSkills: [
      'Google Analytics',
      'Яндекс.Метрика',
      'Python',
      'SQL',
      'Tilda',
    ],
  },
  {
    name: 'Продуктовый дизайнер',
    mainSkills: [
      'Figma',
      'Sketch',
      'Illustrator',
      'Photoshop',
      'Principle',
      'Tilda',
    ],
    otherSkills: ['Shopify', 'Protopie', 'Cinema 4D'],
  },
  {
    name: 'Менеджер проекта',
    mainSkills: [
      'Visio',
      '1C',
      'Google Analytics',
      'Яндекс.Метрика',
      'Python',
      'SQL',
      'Tilda',
    ],
    otherSkills: ['Figma', 'Sketch', 'Shopify'],
  },
  {
    name: 'Финансовый менеджер',
    mainSkills: ['1C', 'Excel', 'Power BI'],
    otherSkills: ['BPMN'],
  },
  {
    name: 'Руководитель финансового департамента компании',
    mainSkills: ['Sketch', 'Figma'],
    otherSkills: ['Shopify', 'HQL'],
  },

  {
    name: 'Продуктовый аналитик',
    mainSkills: [
      'Google Analytics',
      'Яндекс.Метрика',
      'SQL',
      'Power BI',
      'Python',
      'Excel',
    ],
    otherSkills: ['HQL', 'Tableau', 'R', 'Machine learning'],
  },

  {
    name: 'Руководитель финансового продукта',
    mainSkills: ['Visio'],
    otherSkills: ['Python'],
  },
  {
    name: 'Менеджер по маркетингу',
    mainSkills: [
      'Google Analytics',
      'Яндекс.Метрика',
      'Google Ads',
      'Ahrefs',
      'Главред',
      'My Target',
    ],
    otherSkills: ['Tilda', 'Photoshop', 'Xenu', 'Python'],
  },

  {
    name: 'Менеджер по цифровой трансформации',
    mainSkills: [
      'Visio',
      'Google Analytics',
      'Яндекс.Метрика',
      'Python',
      'SQL',
      'Tilda',
    ],
    otherSkills: ['Figma', 'Sketch', 'Shopify'],
  },
];

function skills() {
  const jobs = [];
  const numberOfAllSkills = [];
  data.forEach(function (obj) {
    jobs.push(obj.name);
    obj.mainSkills.forEach(function (el) {
      numberOfAllSkills.push({ skill: el, job: obj.name });
    });
    obj.otherSkills.forEach(function (el) {
      numberOfAllSkills.push({ skill: el, job: obj.name });
    });
  });
  const uniqueSkills = [
    ...new Set(numberOfAllSkills.map((item) => item.skill)),
  ];

  const newDiv = document.createElement('div');
  const jobDiv = document.createElement('div');
  const svgContainer = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );

  for (let i = 0; i < jobs.length; i++) {
    const degree = i * (360 / jobs.length);
    const transformValue = `rotate(${degree}deg) translate(130px) rotate(-${degree}deg)`;
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'dot');
    divElement.style.transform = transformValue;
    const jobsText = document.createElement('span');
    jobsText.textContent = jobs[i];
    jobsText.setAttribute('class', 'job-text');
    jobsText.setAttribute('data-job', jobs[i]);
    divElement.appendChild(jobsText);
    jobDiv.appendChild(divElement);

    divElement.addEventListener('click', function () {
      divElement.style.outline = '2px solid black';
      divElement.style.outlineOffset = '5px';
      divElement.style.backgroundColor = 'green';
      const jobSkills = numberOfAllSkills
        .filter((item) => item.job === jobs[i])
        .map((item) => item.skill);
      uniqueSkills.forEach((skill) => {
        const elements = document.querySelectorAll(`.dott`);
        elements.forEach((element) => {
          if (element.textContent === skill) {
            element.style.backgroundColor = jobSkills.includes(skill)
              ? 'orange'
              : 'rgb(223, 197, 153)';
          }
        });
      });
      svgContainer.innerHTML = '';
      const selectedDot = divElement.getBoundingClientRect();
      uniqueSkills.forEach((skill) => {
        const dottElements = document.querySelectorAll('.dott span');
        dottElements.forEach((dott) => {
          if (dott.textContent === skill && jobSkills.includes(skill)) {
            const selectedDott = dott.parentElement.getBoundingClientRect();
            const line = document.createElementNS(
              'http://www.w3.org/2000/svg',
              'line'
            );
            
            line.setAttribute('x1', selectedDot.left + selectedDot.width / 2);
            line.setAttribute('y1', selectedDot.top + selectedDot.height / 2);
            line.setAttribute('x2', selectedDott.left + selectedDott.width / 2);
            line.setAttribute('y2', selectedDott.top + selectedDott.height / 2);
            line.setAttribute('stroke', 'purple');
            line.setAttribute('stroke-width', '2');
            svgContainer.appendChild(line);
          }
        });
      });
    });

    divElement.addEventListener('mouseleave', function () {
      divElement.style.borderColor = 'gray';
      divElement.style.backgroundColor = 'gray';
      divElement.style.outline = '0';
      divElement.style.outlineOffset = '0';
      const elements = document.querySelectorAll(`.dott`);
      elements.forEach((element) => {
        element.style.backgroundColor = 'rgb(223, 197, 153)';
        element.style.outline = '0';
        element.style.outlineOffset = '0';
      });
      svgContainer.innerHTML = '';
    });
  }
  const dotContainer = document.querySelector('.dot-container');
  for (let i = 0; i < uniqueSkills.length; i++) {
    const degree = i * (360 / uniqueSkills.length);
    const transformValue = `rotate(${degree}deg) translate(300px) rotate(-${degree}deg)`;
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'dott');
    divElement.style.position = 'absolute';
    divElement.style.transform = transformValue;
    const skillText = document.createElement('span');
    skillText.textContent = uniqueSkills[i];
    skillText.setAttribute('class', 'skill-text');
    divElement.appendChild(skillText);
    dotContainer.appendChild(divElement);

    const jobSkills = data
      .filter(
        (job) =>
          job.mainSkills.includes(uniqueSkills[i]) ||
          job.otherSkills.includes(uniqueSkills[i])
      )
      .map((job) => job.name);
    divElement.setAttribute('data-job', jobSkills.join(', '));

    divElement.addEventListener('click', function () {
      divElement.style.outline = '2px solid orange';
      divElement.style.outlineOffset = '5px';
      divElement.style.backgroundColor = 'orange';
      const selectedJob = divElement.getAttribute('data-job').split(', ');
      const jobElements = document.querySelectorAll('.job-text');
      jobElements.forEach((jobElement) => {
        if (selectedJob.includes(jobElement.textContent)) {
          jobElement.parentElement.style.backgroundColor = 'green';
          const selectedDot = divElement.getBoundingClientRect();
          const selectedJobPos =
            jobElement.parentElement.getBoundingClientRect();
          const line = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'line'
          );
          line.setAttribute('x1', selectedDot.left + selectedDot.width / 2);
          line.setAttribute('y1', selectedDot.top + selectedDot.height / 2);
          line.setAttribute(
            'x2',
            selectedJobPos.left + selectedJobPos.width / 2
          );
          line.setAttribute(
            'y2',
            selectedJobPos.top + selectedJobPos.height / 2
          );
          line.setAttribute('stroke', 'purple');
          line.setAttribute('stroke-width', '2');
          svgContainer.appendChild(line);
        }
      });
    });
    divElement.addEventListener('mouseleave', function () {
      divElement.style.outline = '0';
      divElement.style.outlineOffset = '0';
      divElement.style.backgroundColor = 'rgb(223, 197, 153)';
      const elements = document.querySelectorAll('.dot');
      elements.forEach((element) => {
        element.style.backgroundColor = 'gray';
      });
      svgContainer.innerHTML = '';
    });
  }
  svgContainer.setAttribute('width', '100%');
  svgContainer.setAttribute('height', '100%');
  svgContainer.style.position = 'absolute';
  svgContainer.style.top = '0';
  svgContainer.style.left = '0';
  svgContainer.style.pointerEvents = 'none';
  document.body.appendChild(svgContainer);

  document.body.appendChild(newDiv);
  document.body.appendChild(jobDiv);
}
console.log(skills());
