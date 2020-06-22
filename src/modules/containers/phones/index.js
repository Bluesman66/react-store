import * as R from 'ramda';

import React, { useEffect } from 'react';
import {
	addPhoneToBasket,
	fetchCategories,
	fetchPhones,
	loadMorePhones,
} from 'actions';

import AdaptiveTitle from 'components/adaptive-title';
import Layout from 'containers/layout';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhones } from 'selectors';

const Phones = ({
	phones,
	fetchPhones,
	loadMorePhones,
	addPhoneToBasket,
	fetchCategories,
}) => {
	useEffect(() => {
		fetchPhones();
		fetchCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderPhone = (phone, index) => {
		const shortDescription = `${R.take(60, phone.description)}...`;

		return (
			<div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
				<div className="thumbnail">
					<img className="img-thumbnail" src={phone.image} alt={phone.name} />
					<div className="caption">
						<h4 className="pull-right">${phone.price}</h4>
						<h4>
							<Link to={`/phones/${phone.id}`}>
								{<AdaptiveTitle title={phone.name} />}
							</Link>
						</h4>
						<p>{shortDescription}</p>
						<p className="itemButton">
							<button
								className="btn btn-primary"
								onClick={() => addPhoneToBasket(phone.id)}
							>
								Buy Now!
							</button>
							<Link to={`/phones/${phone.id}`} className="btn btn-default">
								More info
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Layout>
			<div className="books row">
				{phones.map((phone, index) => renderPhone(phone, index))}
			</div>
			<div className="row">
				<div className="col-md-12">
					<button
						onClick={loadMorePhones}
						className="pull-right btn btn-primary"
					>
						Load More
					</button>
				</div>
			</div>
		</Layout>
	);
};

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
})

const mapDispatchToProps = {
	fetchPhones,
	loadMorePhones,
	addPhoneToBasket,
	fetchCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
