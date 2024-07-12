import { PantheonLabel, PantheonValue } from '../../types/cards/pantheons'
import { generateBreadcrumbLinks, parseBreadcrumbNode } from './routes'
import { BREADCRUMB_NODES } from './routes.const'

import * as dictionnary from '../dictionary'
import { MockInstance } from 'vitest'
import { SubjectLabel, SubjectValue } from '../../types/cards/subjects'

vi.mock('./string')

describe('helpers/route', () => {
  describe('parseBreadcrumbNode', () => {
    afterEach(() => {
      vi.clearAllMocks()
    })

    describe('for route nodes', () => {
      test(`should return ${BREADCRUMB_NODES.ABOUT.label} for ${BREADCRUMB_NODES.ABOUT.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.ABOUT.value)).toEqual(
          BREADCRUMB_NODES.ABOUT.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.CARDS.label} for ${BREADCRUMB_NODES.CARDS.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.CARDS.value)).toEqual(
          BREADCRUMB_NODES.CARDS.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.CHANGELOG.label} for ${BREADCRUMB_NODES.CHANGELOG.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.CHANGELOG.value)).toEqual(
          BREADCRUMB_NODES.CHANGELOG.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.PANTHEONS.label} for ${BREADCRUMB_NODES.PANTHEONS.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.PANTHEONS.value)).toEqual(
          BREADCRUMB_NODES.PANTHEONS.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.Q2N.label} for ${BREADCRUMB_NODES.Q2N.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.Q2N.value)).toEqual(
          BREADCRUMB_NODES.Q2N.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.SEARCH.label} for ${BREADCRUMB_NODES.SEARCH.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.SEARCH.value)).toEqual(
          BREADCRUMB_NODES.SEARCH.label,
        )
      })

      test(`should return ${BREADCRUMB_NODES.SUBJECTS.label} for ${BREADCRUMB_NODES.SUBJECTS.value} node`, () => {
        expect(parseBreadcrumbNode(BREADCRUMB_NODES.SUBJECTS.value)).toEqual(
          BREADCRUMB_NODES.SUBJECTS.label,
        )
      })
    })

    describe('for pantheon nodes', () => {
      let getPantheonLabelFromValueSpy: MockInstance<
        [pantheon: PantheonValue],
        PantheonLabel | null
      >

      beforeEach(() => {
        getPantheonLabelFromValueSpy = vi.spyOn(
          dictionnary,
          'getPantheonLabelFromValue',
        )
      })

      test(`should return ${PantheonLabel.AZTEC} for ${PantheonValue.AZTEC} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.AZTEC)).toEqual(
          PantheonLabel.AZTEC,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.AZTEC,
        )
      })

      test(`should return ${PantheonLabel.CELTIC} for ${PantheonValue.CELTIC} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.CELTIC)).toEqual(
          PantheonLabel.CELTIC,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.CELTIC,
        )
      })

      test(`should return ${PantheonLabel.CHINESE} for ${PantheonValue.CHINESE} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.CHINESE)).toEqual(
          PantheonLabel.CHINESE,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.CHINESE,
        )
      })

      test(`should return ${PantheonLabel.GREEK} for ${PantheonValue.GREEK} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.GREEK)).toEqual(
          PantheonLabel.GREEK,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.GREEK,
        )
      })

      test(`should return ${PantheonLabel.HINDU} for ${PantheonValue.HINDU} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.HINDU)).toEqual(
          PantheonLabel.HINDU,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.HINDU,
        )
      })

      test(`should return ${PantheonLabel.JAPANESE} for ${PantheonValue.JAPANESE} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.JAPANESE)).toEqual(
          PantheonLabel.JAPANESE,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.JAPANESE,
        )
      })

      test(`should return ${PantheonLabel.MAYAN} for ${PantheonValue.MAYAN} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.MAYAN)).toEqual(
          PantheonLabel.MAYAN,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.MAYAN,
        )
      })

      test(`should return ${PantheonLabel.MESOPOTAMIAN} for ${PantheonValue.MESOPOTAMIAN} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.MESOPOTAMIAN)).toEqual(
          PantheonLabel.MESOPOTAMIAN,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.MESOPOTAMIAN,
        )
      })

      test(`should return ${PantheonLabel.NORSE} for ${PantheonValue.NORSE} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.NORSE)).toEqual(
          PantheonLabel.NORSE,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.NORSE,
        )
      })

      test(`should return ${PantheonLabel.ROMAN} for ${PantheonValue.ROMAN} node`, () => {
        expect(parseBreadcrumbNode(PantheonValue.ROMAN)).toEqual(
          PantheonLabel.ROMAN,
        )
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getPantheonLabelFromValueSpy).toHaveBeenCalledWith(
          PantheonValue.ROMAN,
        )
      })
    })

    describe('for subject nodes', () => {
      let getSubjectLabelFromValueSpy: MockInstance<
        [pantheon: SubjectValue],
        SubjectLabel | null
      >

      beforeEach(() => {
        getSubjectLabelFromValueSpy = vi.spyOn(
          dictionnary,
          'getSubjectLabelFromValue',
        )
      })

      test(`should return ${SubjectLabel.DIVINITY} for ${SubjectValue.DIVINITY} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.DIVINITY)).toEqual(
          SubjectLabel.DIVINITY,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.DIVINITY,
        )
      })

      test(`should return ${SubjectLabel.MONSTER} for ${SubjectValue.MONSTER} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.MONSTER)).toEqual(
          SubjectLabel.MONSTER,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.MONSTER,
        )
      })

      test(`should return ${SubjectLabel.PERSON} for ${SubjectValue.PERSON} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.PERSON)).toEqual(
          SubjectLabel.PERSON,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.PERSON,
        )
      })

      test(`should return ${SubjectLabel.PLACE} for ${SubjectValue.PLACE} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.PLACE)).toEqual(
          SubjectLabel.PLACE,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.PLACE,
        )
      })

      test(`should return ${SubjectLabel.TRIBE} for ${SubjectValue.TRIBE} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.TRIBE)).toEqual(
          SubjectLabel.TRIBE,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.TRIBE,
        )
      })

      test(`should return ${SubjectLabel.WRITINGS} for ${SubjectValue.WRITINGS} node`, () => {
        expect(parseBreadcrumbNode(SubjectValue.WRITINGS)).toEqual(
          SubjectLabel.WRITINGS,
        )
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledTimes(1)
        expect(getSubjectLabelFromValueSpy).toHaveBeenCalledWith(
          SubjectValue.WRITINGS,
        )
      })
    })

    describe('for other nodes', () => {
      test('should return capitalize version of a lower case word', () =>
        expect(parseBreadcrumbNode('zeus')).toEqual('Zeus'))

      test('should return the same word as it is already capitalized', () =>
        expect(parseBreadcrumbNode('Zeus')).toEqual('Zeus'))

      test('should return capitalized and space version of a lower-dashed word', () =>
        expect(parseBreadcrumbNode('popol-vuh')).toEqual('Popol Vuh'))

      test('should return the same word without dash as it is already capitalized', () =>
        expect(parseBreadcrumbNode('Popol-Vuh')).toEqual('Popol Vuh'))
    })
  })

  describe('generateBreadcrumbLinks', () => {
    test('should correctly return a 3 level breadcrumb', () =>
      expect(generateBreadcrumbLinks(['cards', 'egyptian', 'sphinx'])).toEqual([
        '/cards',
        '/cards/egyptian',
        '/cards/egyptian/sphinx',
      ]))

    test('should correctly return a 2 level breadcrumb', () =>
      expect(generateBreadcrumbLinks(['pantheons', 'norse'])).toEqual([
        '/pantheons',
        '/pantheons/norse',
      ]))

    test('should correctly return a single level breadcrumb', () =>
      expect(generateBreadcrumbLinks(['q2n'])).toEqual(['/q2n']))

    test('should return homepage link of no node is provided', () =>
      expect(generateBreadcrumbLinks([''])).toEqual(['/']))
  })
})
