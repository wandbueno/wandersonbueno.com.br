import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

const Experience = () => {
  return (
    <div className="experieces">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - Atual"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ciência da Computação
          </h3>
          <p> Universidade Federal do Tocantins</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Front-End
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Palmas - TO</h4>
          <p> Barco Digital</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Campos Belos - GO
          </h4>
          <p>
            Curso incompleto de Análise e Desenvolvimento de Sistemas pela
            UNIGRAN
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2014"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Licenciatura em Matemática
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Arraias - TO</h4>
          <p>Curso de licenciatura em matemática pela UFT incompleto</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2009"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Ensino Médio</h3>
          <h4 className="vertical-timeline-element-subtitle">Arraias - TO</h4>
          <p>Escola Estadual Professora Joana Batista Cordeiro</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
