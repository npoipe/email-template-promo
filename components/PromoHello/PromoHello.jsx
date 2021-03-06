import { PromoHelloStyles as stls } from './promoHelloStyles'
import { Container, Row, Column } from 'postonents'

const PromoHello = ({ type }) => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column>
          <h3 style={stls.title}>Здравствуйте!</h3>
          <p style={stls.p}>
            {type === 'psychology' ? (
              <>
                Вы интересовались обучением психологии, но возможно не нашли подходящего вам графика. Недавно мы сформировали новые группы, а также дополнили новыми, интересными профессиями и приглашаем вас познакомиться с новыми профессиями и сроками обучения
              </>
            ) : type === 'management' ? (
              <>
                Вы интересовались обучением по направлению менеджмент, но возможно не нашли подходящего вам графика. Недавно мы сформировали новые группы, а также дополнили новыми, интересными профессиями и приглашаем вас познакомиться с новыми профессиями и сроками обучения
              </>
            ) : type === 'tech' ? (
              <>
                Вы ранее интересовались информацией о поступлении на техническое направление, но возможно не нашли подходящего вам графика. Недавно мы сформировали новые группы, а также дополнили новыми, интересными профессиями и приглашаем вас познакомиться с новыми профессиями и сроками обучения
              </>
            ) : (
              ''
            )}
          </p>
          <p style={stls.p}>
            {type === 'psychology' ? (
              <>
                На все программы психологии, действует скидка, от конечной стоимости указанной на сайте. Как же ее получить?
              </>
            ) : type === 'management' ? (
              <>
                На все программы менеджмента, действует скидка, от конечной стоимости указанной на сайте. Как же ее получить?
              </>
            ) : type === 'tech' ? (
              <>
                На все программы технических направлений, действует скидка, от конечной стоимости указанной на сайте. Как же ее получить?
              </>
            ) : (
              ''
            )}
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default PromoHello
